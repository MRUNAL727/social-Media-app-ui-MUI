import { Box } from '@mui/material'
import React from 'react'
import { Favorite, Share, MoreVert, FavoriteBorder } from '@mui/icons-material'
import Post from './Post'

const Feed = () => {
  return (
      <Box flex={4}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </Box>
  )
}

export default Feed