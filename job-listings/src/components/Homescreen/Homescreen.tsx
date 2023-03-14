import React, { useState } from 'react';
import {JobListContainer, JobListWrapper, JobListCard, JobListTitle, JobListLogo, JobListCompany, JobListDetailsContainer, JobListDetails, JobListInfo, JobListInfoContainer, JobListImageContainer, JobListNew, JobListFeatured} from './HomeScreenElements';
import { Job } from '../../types';

interface HomescreenProps{
    data: Job[];
}

const Homescreen: React.FC<HomescreenProps> = ({data}) => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    console.log('Clicked')
  }

    return (
      <JobListContainer>
        <JobListWrapper>
          {data.map((job, id) => {
            return (
              <JobListCard key={id}> 
                <JobListImageContainer>
                  <JobListLogo src={job.logo} alt={job.company}></JobListLogo>
                  <JobListCompany>{job.company}</JobListCompany>
                  {job.new &&  <JobListNew> <span className='new'>New!</span></JobListNew>}
                  {job.featured && <JobListFeatured> <span className="featured">Featured</span></JobListFeatured>}
                </JobListImageContainer>
                <div>
                  <JobListTitle>{job.position}</JobListTitle>
                  <JobListInfoContainer>
                    <JobListInfo>{job.postedAt}</JobListInfo> 
                    <JobListInfo>{job.contract}</JobListInfo>  
                    <JobListInfo>{job.location}</JobListInfo>
                  </JobListInfoContainer>
                  <JobListDetailsContainer>
                    <JobListDetails onClick={() => handleCategorySelect(selectedCategory)}>{job.role}</JobListDetails> 
                    <JobListDetails onClick={() => handleCategorySelect(selectedCategory)}>{job.level}</JobListDetails> 
                    {job.languages.map((language, index) => {
                      return <JobListDetails key={`language-${index}`}>{language}</JobListDetails>
                    })}
                    {job.tools.map((tool, index) => {
                      return <JobListDetails key={`tool-${index}`}>{tool}</JobListDetails>
                    })}
                  </JobListDetailsContainer>
                </div>
              </JobListCard>  
            );
          })}
        </JobListWrapper>
      </JobListContainer>
    );
  };
  
export default Homescreen;
