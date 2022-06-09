import styled from 'styled-components';

export type PostScheme = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

type Props = {
  data: PostScheme;
};

const Post = ({ data }: Props): JSX.Element => {
  return (
    <Container>
      <div style={{ fontWeight: 'bold' }}>{data.title}</div>
      <div>{data.body}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #36fabb;
  padding: 10px 20px;
  border-radius: 4px;
  border-left: 5px solid #36fabb;

  &:hover {
    background-color: #e3fff6;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
`;

export default Post;
