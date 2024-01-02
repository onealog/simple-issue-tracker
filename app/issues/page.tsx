import { Button } from '@radix-ui/themes';
import Link from 'next/link';

function IssuePage() {
  return (
    <Link href="issues/new">
      <Button>New Issue Page</Button>
    </Link>
  );
}

export default IssuePage;
