import Link from 'next/link';

export default function Home() {
  return (
      <div style={{ padding: '2rem' }}>
        <h1>Welcome to MiRA-i</h1>
        <ul>
          <li><Link href="/profile">Create Candidate Profile</Link></li>
          <li><Link href="/jobs">Browse Jobs</Link></li>
          <li><Link href="/mock-interview">Take Mock Interview</Link></li>
        </ul>
      </div>
  );
}
