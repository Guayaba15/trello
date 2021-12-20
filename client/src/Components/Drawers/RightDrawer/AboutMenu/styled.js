import styled from 'styled-components';

export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:1.5rem;
`;

export const SectionContainer = styled.div`
width:100%;
height:fit-content;
display:flex;
flex-direction: column;
`;

export const SectionHeaderContainer = styled.div`
width:100%;
height:fit-content;
display:flex;
flex-direction:row;
gap:0.5rem;
align-items:center;
justify-content:flex-start;
`;

export const IconWrapper = styled.div`
font-size:1.75rem;
color:#42526e;
`;

export const SectionTitle = styled.div`
width:100%;
height:1.75rem;
font-weight:800;
font-size:1rem;
color:#172b4d;
`;

export const MemberSectionContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
gap:0.5rem;
`;

export const Avatar = styled.div`
min-height: 3rem;
min-width:3rem;
border-radius:50%;
font-size:1.25rem;
color: #fff;
background-color:#41885B;
font-weight: 800;
display:flex;
align-items:center;
justify-content: center;
`;

export const MemberInfoContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const MemberName = styled.div`
width:100%;
font-size:1rem;
font-weight:800;
word-wrap:break-word;
color:#172b4d;
`;

export const MemberEmail = styled.div`
width:100%;
font-size:0.875rem;
word-wrap:break-break-word;
color:#5e6c84;
`;

export const DescriptionSectionContainer = styled.div`
width:100%;
padding:0rem 0.2rem;
`;

export const DescriptionInput = styled.textarea`
width:100%;
resize:none;
border-radius:3px;
font-size:0.875rem;
min-height:5rem;
padding: 0.5rem;
border:none;
line-height: 1.25rem;
background-color:rgba(0,0,0,0.045);
outline-color: transparent;
cursor: pointer;
&:hover{
    background-color: rgba(0,0,0,0.065);
}
&::placeholder{
    color: #000;
    
}
&:focus{
    background-color:white;
    outline-color: #0079bf;
    &::placeholder{
        color: #C7CCD4;
    }
}
`;

