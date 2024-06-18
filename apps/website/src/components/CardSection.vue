<template>
  <Container>
    <div class="grid grid-cols-2 gap-6">
      <div class="grid grid-cols-1 gap-5">
        <Card>
          <IconCircle class="bg-[#F2F4FF] text-[#2338A9]">
            <Icon name="mingcute:github-fill" />
          </IconCircle>
          <CardTitle>Validate translations with Locali Checks</CardTitle>
          <Paragraph>
            Checks can validate anything. From syntax to missing commas. Create
            & code your own checks using simple Javascript code.
          </Paragraph>
        </Card>
        <Card>
          <IconCircle class="bg-[#F1DFFF] text-[#A948D7]">
            <Icon nameIcon name="mingcute:github-fill" />
          </IconCircle>
          <CardTitle>Synchronize with Git</CardTitle>
          <Paragraph>
            Keep your translations synced with any git repository. Either push
            directly to the main branch or have automatic pull requests.
          </Paragraph>
        </Card>
        <Card>
          <IconCircle class="bg-[#F8D9E0] text-[#E13065]">
            <Icon name="mingcute:github-fill" />
          </IconCircle>
          <CardTitle>Fit any team size</CardTitle>
          <Paragraph>
            Whether you are translating yourself, using a translation service or
            depending on crowd sourcing. Locali fits any size or workflow.
          </Paragraph>
        </Card>
      </div>
      <div class="mt-[80px] grid grid-cols-1 gap-5">
        <Card>
          <IconCircle class="bg-[#D9F8D9] text-[#23A938]">
            <Icon name="ri:git-branch-fill" />
          </IconCircle>
          <CardTitle>Proudly open source</CardTitle>
          <Paragraph>
            Source code is open to contribute and read. Self-hosting is
            encouraged.
          </Paragraph>
        </Card>
        <Card>
          <IconCircle class="bg-[#F8D9E0] text-[#E13065]">
            <Icon name="mingcute:github-fill" />
          </IconCircle>
          <CardTitle>Approval system</CardTitle>
          <Paragraph>
            Sometimes translations can be unreliable. In that event, you can
            force users to submit translations for approvals. So you can review
            translations before they go through.
          </Paragraph>
        </Card>
        <Card class="!bg-[#0D151F]">
          <CardTitle class="text-white">Interested?</CardTitle>
          <Paragraph class="text-[#9296B4]">
            Join the waitlist and get updates on progress on Locali while it's
            being built. You may even get early access to the platform.
          </Paragraph>
          <Button class="mt-7 w-full"> Join the waitlist! </Button>
        </Card>
      </div>
    </div>
  </Container>
</template>
