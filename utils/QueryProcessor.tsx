export default function QueryProcessor(query: string): string {
  const decodedQuery = (() => {
    if (!query) {
      return "";
    }

    try {
      return decodeURIComponent(query);
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

  const largestMatch = normalizedQuery.match(/largest\s*:\s*([^?]+)/i);
  if (largestMatch) {
    const numbers = (largestMatch[1].match(/-?\d+/g) || []).map((n) => parseInt(n, 10));
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  const additionMatch = normalizedQuery.match(/(-?\d+)\s*plus\s*(-?\d+)/i);
  if (additionMatch) {
    return (parseInt(additionMatch[1], 10) + parseInt(additionMatch[2], 10)).toString();
  }

  return "";
}