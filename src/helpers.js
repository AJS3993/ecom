export function formatPrice(cents) {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

  export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

 
  export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
  
  export function getFunName() {
    const adjectives = [
      "adorable",
      "beautiful",
      "clean",
      "elegant",
      "fancy",
      "glamorous",
      "handsome",
      "long",
      "magnificent",
      "old-fashioned",
      "plain",
      "quaint",
      "sparkling"
    ];
  
    const nouns = [
      "sports shoes",
      "loafers",
      "boots",
      "tennis shoes",
      "dress shoes"
    ];
  
    return `${rando(adjectives)} ${rando(nouns)}`;
  }

  export function person() {

    const people = [
      "Womens",
      "Mens",
      "Kids"]

      return `${rando(people)}`
      }