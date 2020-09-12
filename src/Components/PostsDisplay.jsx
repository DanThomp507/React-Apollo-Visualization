import React from 'react';
import VX from './VX';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const Select = styled.select`
  max-width: 300px;
  max-height: 20px;
  margin: 20px 0;
`

const PostsDisplay = ({ posts }) => {
  const [selected, setSelected] = React.useState(posts[0])

  const handleChange = e => {
    setSelected(posts[e.target.value])
  }

  const labelValues = [];
  selected.likelyTopics.map(item => {
    labelValues.push({ label: item.label, value: item.likelihood });
    return null;
  })

  return (
    <Container>
      <h2 style={{ color: 'white' }}>Post Title: {selected.title}</h2>
      <VX data={labelValues} />
      <Select onChange={handleChange}>
        {posts.map((item, index) => (
          <option key={index} value={index}>{item.title}</option>
        ))}
      </Select>
      <h4>Each topic's score demonstrates the likelihood it's related to the post </h4>
    </Container>
  );
}

PostsDisplay.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostsDisplay;