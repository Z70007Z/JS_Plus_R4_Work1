export default function infoHealth(name, health) {
  if (health > 50) {
    return 'healthy';
  }
  if ((health < 51) && (health > 14)) {
    return 'wounded';
  }
  if (health < 15) {
    return 'critical';
  }
  return 'undefined';
}
