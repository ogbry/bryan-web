import { NextResponse } from "next/server";

// Cache the GitHub response for 1 hour to stay well under rate limits.
export const revalidate = 3600;

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "ogbry";

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("GITHUB_TOKEN missing");
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: GITHUB_USERNAME },
      }),
      // Revalidate at the fetch level as well
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("GitHub API error:", res.status, text);
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 502 }
      );
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GitHub GraphQL errors:", json.errors);
      return NextResponse.json(
        { error: "GitHub query error" },
        { status: 502 }
      );
    }

    const user = json.data?.user;
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const calendar = user.contributionsCollection.contributionCalendar;

    const data = {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks.map(
        (w: { contributionDays: unknown[] }) => w.contributionDays
      ),
      pinned: user.pinnedItems.nodes,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("GitHub route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
