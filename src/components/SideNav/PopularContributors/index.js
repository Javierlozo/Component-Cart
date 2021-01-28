import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box';

// useEffect to make api calls to sort top rated users/contributers
// for now passing in testContributors to map function
const testContributors = [
  {
    name: "Uno Wallace",
    likes: 500,
    avatar: null
  },
  {
    name: "Dos Jones",
    likes: 400,
    avatar: null
  },
  {
    name: "Tres Smith",
    likes: 300,
    avatar: null
  },
  {
    name: "Cuatro Quatro",
    likes: 300,
    avatar: null
  },
  {
    name: "Cinco Fiveo",
    likes: 220,
    avatar: null
  },
]

export default function PopularContributors() {
  return (
    <Box>
      <Typography variant="h5">
        Popular Contributors
      </Typography>
      <Box>
        <List elementType="ol">
          {testContributors.map((e) => {
            return(
            <ListItem style={{display: "flex", flexDirection: "column"}}>
              <Box id="first-row" style={{display: "flex", flexDirection: "row"}}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={e.name}/>
              </Box>
                <Box id="second-row" style={{display: "flex", flexDirection: "row"}}>
                  <ListItemIcon>
                    <ThumbUpIcon />
                  </ListItemIcon>
                <ListItemText primary={e.likes}/>
              </Box>
            </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>

  )
}