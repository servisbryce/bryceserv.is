"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Icon
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  in_progress: boolean;
}

function progressDisplay(in_progress) {

  if (in_progress) {

    return <Icon style={{ color: "green" }}name="in_progress"/>

  } else {

    return <Icon style={{ color: "orange" }} name="paused"/>

  }

}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  in_progress
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            <Flex gap="m" vertical="center" horizontal="space-between">

              {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
              {in_progress == true && <Flex gap="8" vertical="center"><Icon style={{ color: "green" }}name="in_progress"/><Text variant="label-default-s" onBackground="neutral-weak">Project underway.</Text></Flex>}
              {in_progress == false && <Flex gap="8" vertical="center"><Icon style={{ color: "orange" }}name="paused"/><Text variant="label-default-s" onBackground="neutral-weak">Project completed.</Text></Flex>}

            </Flex>
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Explore</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
