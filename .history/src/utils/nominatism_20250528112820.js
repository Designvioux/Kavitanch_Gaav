// src/utils/nominatim.js
export const fetchLocations = async (query, level = 'place') => {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1`);
  const data = await res.json();
  const unique = new Set();
  return data.map(i => i.address?.[level])
    .filter(loc => loc && !unique.has(loc) && unique.add(loc));
};
