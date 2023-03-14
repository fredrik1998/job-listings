import React, { useState, useEffect } from 'react';
import {
  JobListContainer,
  JobListWrapper,
  JobListCard,
  JobListTitle,
  JobListLogo,
  JobListCompany,
  JobListDetailsContainer,
  JobListDetails,
  JobListInfo, 
  JobListInfoContainer,
  JobListImageContainer,
  JobListNew, 
  JobListFeatured, 
  JobListRemove, 
  JobListClear,
  JobListFilter,
  JobListFilterItem,

} from './HomeScreenElements';

import { Job } from '../../types';
import iconRemove from '../../assets/icon-remove.svg'
interface HomescreenProps{
  data: Job[];
}

const Homescreen: React.FC<HomescreenProps> = ({data}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<Job>>(data);

  const handleCategorySelect = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
    setSelectedCategory(category);
  };
  
  const handleCategoryRemove = (category: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  const handleCategoriesRemoveAll = (categories: Array<string>) => {
    setSelectedCategories(selectedCategories.filter(category => !categories.includes(category)))
  }

  useEffect(() => {
    const filteredJobs = selectedCategories.length > 0 ? data.filter(job => {
      return selectedCategories.every(category => {
        return job.role === category || job.level === category || job.languages.includes(category) || job.tools.includes(category);
      });
    }) : data;
    
    setFilteredJobs(filteredJobs);
  }, [data, selectedCategories]);

  return (
    <JobListContainer>
      {selectedCategories.length > 0 && (
        <JobListFilter>
        {selectedCategories.map((category) => (
          <JobListFilterItem key={category}>
            {category}
            <JobListRemove onClick={() => handleCategoryRemove(category)}><img src={iconRemove}></img></JobListRemove>
          </JobListFilterItem>
        ))}
  <JobListClear onClick={() => handleCategoriesRemoveAll(selectedCategories)}>
    Clear
  </JobListClear>
      </JobListFilter>
      )}
      <JobListWrapper>
        {filteredJobs.map((job, id) => {
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
                  <JobListDetails onClick={() => handleCategorySelect(job.role)}>{job.role}</JobListDetails> 
                  <JobListDetails onClick={() => handleCategorySelect(job.level)}>{job.level}</JobListDetails> 
                  {job.languages.map((language, index) => {
                    return <JobListDetails onClick={() => handleCategorySelect(language)} key={`language-${index}`}>{language}</JobListDetails>
                  })}
                  {job.tools.map((tool, index) => {
                    return <JobListDetails onClick={() => handleCategorySelect(tool)} key={`tool-${index}`}>{tool}</JobListDetails>
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
