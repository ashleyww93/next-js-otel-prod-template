import type { Meta, StoryObj } from "@storybook/nextjs"
import Grid from "@/components//Grid"
import Card from "@/components/Card"

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
    },
    gap: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cols: 3,
    gap: "md",
    children: null,
  },
  render: (args) => (
    <Grid {...args}>
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
      <Card>Item 4</Card>
      <Card>Item 5</Card>
      <Card>Item 6</Card>
    </Grid>
  ),
}

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: "lg",
    children: null,
  },
  render: (args) => (
    <Grid {...args}>
      <Card>
        <h3 className="mb-2 text-lg font-semibold">Left Column</h3>
        <p className="text-muted-foreground">Content for the left side of a two-column layout.</p>
      </Card>
      <Card>
        <h3 className="mb-2 text-lg font-semibold">Right Column</h3>
        <p className="text-muted-foreground">Content for the right side of a two-column layout.</p>
      </Card>
    </Grid>
  ),
}

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: "md",
    children: null,
  },
  render: (args) => (
    <Grid {...args}>
      <Card>
        <h3 className="mb-2 font-semibold">Feature 1</h3>
        <p className="text-muted-foreground text-sm">Description of the first feature.</p>
      </Card>
      <Card>
        <h3 className="mb-2 font-semibold">Feature 2</h3>
        <p className="text-muted-foreground text-sm">Description of the second feature.</p>
      </Card>
      <Card>
        <h3 className="mb-2 font-semibold">Feature 3</h3>
        <p className="text-muted-foreground text-sm">Description of the third feature.</p>
      </Card>
    </Grid>
  ),
}

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: "sm",
    children: null,
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Card key={item}>
          <div className="text-center">
            <div className="text-primary mb-2 text-2xl font-bold">{item}</div>
            <p className="text-muted-foreground text-xs">Item {item}</p>
          </div>
        </Card>
      ))}
    </Grid>
  ),
}

export const WithDifferentGaps: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Small Gap</h3>
        <Grid cols={3} gap="sm">
          <Card>Item 1</Card>
          <Card>Item 2</Card>
          <Card>Item 3</Card>
        </Grid>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Medium Gap</h3>
        <Grid cols={3} gap="md">
          <Card>Item 1</Card>
          <Card>Item 2</Card>
          <Card>Item 3</Card>
        </Grid>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Large Gap</h3>
        <Grid cols={3} gap="lg">
          <Card>Item 1</Card>
          <Card>Item 2</Card>
          <Card>Item 3</Card>
        </Grid>
      </div>
    </div>
  ),
}
