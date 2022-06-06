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
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 3px;

  &:hover {
    background-color: #ccc;
  }
`;

export default Post;
