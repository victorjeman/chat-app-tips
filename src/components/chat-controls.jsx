import { Button, Group } from '@mantine/core'

export function ChatControls({ showContacts }) {
  return (
    <Group>
      <Button variant="outline" color="blue">
        Discussions
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          showContacts(true)
        }}>
        Show contacts
      </Button>
    </Group>
  )
}
