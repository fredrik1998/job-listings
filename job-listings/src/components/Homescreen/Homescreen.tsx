import React from 'react';
import {JobListContainer, JobListWrapper, JobListCard, JobListTitle, JobListLogo, JobListCompany, JobListDetailsContainer, JobListDetails, JobListInfo, JobListInfoContainer, JobListImageContainer} from './HomeScreenElements';
import { Job } from '../../types';

interface HomescreenProps{
    data: Job[];
}

const Homescreen: React.FC<HomescreenProps> = ({data}) => {
    return (
      <JobListContainer>
        <JobListWrapper>
          {data.map((job, id) => {
            return (
              <JobListCard key={id}> 
                <JobListImageContainer>
                  <JobListLogo src={job.logo}></JobListLogo>
                  <JobListCompany>{job.company}</JobListCompany>
                </JobListImageContainer>
                <div>
                  <JobListTitle>{job.position}</JobListTitle>
                  <JobListInfoContainer>
                    <JobListInfo>{job.postedAt}</JobListInfo> 
                    <JobListInfo>{job.contract}</JobListInfo>  
                    <JobListInfo>{job.location}</JobListInfo>
                  </JobListInfoContainer>
                  <JobListDetailsContainer>
                    <JobListDetails>{job.role}</JobListDetails> 
                    <JobListDetails>{job.level}</JobListDetails> 
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
