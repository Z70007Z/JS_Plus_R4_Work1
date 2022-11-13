export default function infoHealth(name, health) {
    if (health > 50) {
        return 'healthy';
    } else if ((health < 51) && (health > 14)) {
        return 'wounded';
    } else {
        return 'critical';
    }
}