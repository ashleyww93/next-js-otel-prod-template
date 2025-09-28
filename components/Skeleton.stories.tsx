import type { Meta, StoryObj } from "@storybook/nextjs"
import Card from "@/components/Card"
import Skeleton from "@/components/Skeleton"

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["text", "rectangular", "circular"],
    },
    animation: {
      control: { type: "select" },
      options: ["pulse", "wave", "none"],
    },
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "rectangular",
    width: 200,
    height: 100,
    animation: "pulse",
  },
}

export const TextVariant: Story = {
  args: {
    variant: "text",
    animation: "pulse",
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <Skeleton {...args} className="mb-2" />
      <Skeleton {...args} className="mb-2" />
      <Skeleton {...args} width="80%" />
    </div>
  ),
}

export const CircularVariant: Story = {
  args: {
    variant: "circular",
    width: 80,
    height: 80,
    animation: "pulse",
  },
}

export const WaveAnimation: Story = {
  args: {
    variant: "rectangular",
    width: 200,
    height: 100,
    animation: "wave",
  },
}

export const NoAnimation: Story = {
  args: {
    variant: "rectangular",
    width: 200,
    height: 100,
    animation: "none",
  },
}

export const CardSkeleton: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Card>
      <div className="mb-2 flex items-center gap-3">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width="60%" height={24} />
      </div>
      <Skeleton variant="text" className="mb-1" />
      <Skeleton variant="text" className="mb-1" />
      <Skeleton variant="text" width="80%" />
    </Card>
  ),
}

export const FormSkeleton: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <Skeleton variant="text" width="30%" height={14} className="mb-2" />
        <Skeleton variant="rectangular" height={40} className="rounded" />
      </div>
      <div>
        <Skeleton variant="text" width="25%" height={14} className="mb-2" />
        <Skeleton variant="rectangular" height={40} className="rounded" />
      </div>
      <div>
        <Skeleton variant="text" width="35%" height={14} className="mb-2" />
        <Skeleton variant="rectangular" height={80} className="rounded" />
      </div>
      <Skeleton variant="rectangular" width="40%" height={44} className="rounded" />
    </div>
  ),
}

export const ListSkeleton: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="w-96 space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1">
            <Skeleton variant="text" width="70%" className="mb-1" />
            <Skeleton variant="text" width="40%" height={14} />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const GridSkeleton: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-3 gap-4" style={{ width: 600 }}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Skeleton key={i} variant="rectangular" height={150} />
      ))}
    </div>
  ),
}
