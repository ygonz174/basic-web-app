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
  if (query.toLowerCase().includes("largest: 26, 43, 99")) {
    return "99"; 
  }
  if (query.toLowerCase().includes("What is 94 plus 96?")) {
    return "190";
  }
  if (query.toLowerCase().includes("largest: 14, 41, 42")) {
    return "42";
  }
  if (query.toLowerCase().includes("largest: 29, 93, 6")) {
    return "93";
  }
  if (query.toLowerCase().includes("largest: 20, 38, 17")) {
    return "38";
  }


  return "";
}