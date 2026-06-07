const navItems = [
  ["home", "Home"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["system-map", "System map"],
  ["timeline", "Timeline"],
  ["contact", "Contact"]
];

export function SectionNav() {
  return (
    <nav className="section-dots" aria-label="Section navigation">
      {navItems.map(([id, label]) => (
        <a key={id} href={`#${id}`} aria-label={label} />
      ))}
    </nav>
  );
}
