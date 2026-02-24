export default function QueryProcessor(query: string): string {
  const decodedQuery = (() => {
    if (!query) {
      return "";
    }

    try {
      const firstPass = decodeURIComponent(query);
      try {
        return decodeURIComponent(firstPass);
      } catch {
        return firstPass;
      }
    } catch {
      return query;
    }
  })();

  const normalizedQuery = decodedQuery.replace(/\+/g, " ").trim();
  const lowerQuery = normalizedQuery.toLowerCase();

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("name")) {
    return "yaritzag";
  }

  if (lowerQuery.includes("andrew id")) {
    return "yaritzag"; 
  }

  if (lowerQuery.includes("largest")) {
    const numbers = (normalizedQuery.match(/-?\d+/g) || []).map((n) => parseInt(n, 10));
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  if (lowerQuery.includes("plus")) {
    const numbers = (normalizedQuery.match(/-?\d+/g) || []).map((n) => parseInt(n, 10));
    if (numbers.length >= 2) {
      return (numbers[0] + numbers[1]).toString();
    }
  }

  return "";
}