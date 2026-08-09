/**
 * InsForge Client
 *
 * Inisialisasi client InsForge SDK untuk mengakses database, auth, dan storage.
 * Kredensial diambil dari environment variables (.env.local).
 */
import { createClient } from '@insforge/sdk';

const insforgeUrl = process.env.NEXT_PUBLIC_INSFORGE_URL!;
const insforgeAnonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!;

if (!insforgeUrl || !insforgeAnonKey) {
  throw new Error(
    'Missing InsForge environment variables. Please set NEXT_PUBLIC_INSFORGE_URL and NEXT_PUBLIC_INSFORGE_ANON_KEY in .env.local'
  );
}

export const insforge = createClient({
  baseUrl: insforgeUrl,
  anonKey: insforgeAnonKey,
});
