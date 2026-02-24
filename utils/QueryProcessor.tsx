export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "yaritzag";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "yaritzag"; 
  }
  const largestMatch = query.match(/largest:\s*([\d,\s]+)/i);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(n => parseInt(n.trim()));
    return Math.max(...numbers).toString();
  }

  // Helper function to handle addition
  const additionMatch = query.match(/(\d+)\s*plus\s*(\d+)/i);
  if (additionMatch) {
    return (parseInt(additionMatch[1]) + parseInt(additionMatch[2])).toString();
  }

  return "";
}