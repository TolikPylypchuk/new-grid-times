import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <OpinionStory key={story.id} {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 6fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-block-end: 16px;
    margin-block-end: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  & ${StoryList} {
    @media ${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
      gap: 32px;
    }
  }

  & ${StoryList} ${VerticalStoryWrapper} {
    border-bottom: revert;
    padding-block-end: revert;
    margin-block-end: revert;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  
  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
