import styled from "styled-components";

export const JobListContainer = styled.div`
min-height: 100vh;
padding: 2rem calc((100vw - 1300px) / 2);
--bg-opacity: 1;
background-color: hsl(180, 52%, 96%);
`
export const JobListWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 80%;
`
export const JobListCard = styled.div`
width: 100%;
background-color: #FFF;
color: #ccc;
margin-bottom: 1rem;
overflow: hidden;
box-shadow: 4px hsl(180, 14%, 20%);
`

export const JobListTitle = styled.h1`
display: flex;
margin-left: 100px;
margin-top: -30px;
font-size: 16px;
font-weight: 700;
color: #000;
@media screen and (max-width: 910px) {
    margin-top: 5px;
    margin-left: 20px;  
}
`

export const JobListLogo = styled.img`
width: 50px;
height: 50px;
margin-top: 20px;
border-radius: 50%;
margin-left: 40px;
@media screen and (max-width: 910px) {
margin-left: 20px;
    
}`

export const JobListCompany = styled.h3`
font-size: 16px;
margin-left: 10px;
margin-top: 20px;
color:  hsl(180, 29%, 50%);
@media screen and (max-width: 910px) {
    margin-top: 10px;
    margin-left: 20px;
    
}
`

export const JobListNew = styled.h3`
height: 20px;
width: 50px;
border-radius: 18px;
padding-left: 8px;
padding-right: 8px;
font-size: 14px;
text-transform: uppercase;
font-weight: 700;
margin-left: 10px;
margin-top: 20px;
color: #fff;
background-color:  hsl(180, 29%, 50%);
@media screen and (max-width: 910px) {
    margin-top: 10px;
    margin-left: 20px;  
}
`
export const JobListFeatured = styled.h3`
height: 20px;
border-radius: 18px;
padding-left: 8px;
padding-right: 8px;
font-size: 14px;
text-transform: uppercase;
font-weight: 700;
margin-left: 10px;
margin-top: 20px;
color: #fff;
background-color: #000;
@media screen and (max-width: 910px) {
    width: 75px;
    margin-top: 10px;
    margin-left: 20px;
    
}
`
export const JobListInfoContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 0px;
gap: 20px;
margin-left: 100px;
@media screen and (max-width: 910px) {
    border-bottom: 1px solid hsl(180, 8%, 52%);
    width: 80%;
    margin-left: 20px;
    margin-top: 20px;
  }
`
export const JobListInfo = styled.p`
font-size: 14px;
color:  hsl(180, 8%, 52%);
padding-bottom: 20px;
`
export const JobListDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: -40px;
  margin-right: 30px;
  gap: 20px;
  @media screen and (max-width: 910px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const JobListDetails = styled.button`
font-size: 16px;
color: hsl(180, 29%, 50%);
background-color: hsl(180, 31%, 95%);
border: none;
border-radius: 10px;
padding: 8px;
cursor: pointer;
:hover{
  background-color: hsl(180, 29%, 50%);
  color: #fafafa;
}

`
export const JobListImageContainer = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 910px) {
    flex-direction: column;
}
`
