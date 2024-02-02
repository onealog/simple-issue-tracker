'use client';

import React from 'react';
import {
  Button, Flex, TextArea, TextField,
} from '@radix-ui/themes';

function NewIssuePage() {
  return (
    <Flex direction="column" gap="3" className="mx-10" style={{ maxWidth: 400 }}>
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button style={{ cursor: 'pointer' }}>Submit New Issue</Button>
    </Flex>
  );
}

export default NewIssuePage;
