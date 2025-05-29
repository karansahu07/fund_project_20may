export function generateRandomHexPassword(length = 8): string {
    const chars = 'abcdef0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  }
  