import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import Box from '@material-ui/core/Box';

// useEffect to make api calls to sort top rated components, limited to 5
const testComponents = [
  {
    name: "First Component",
    likes: 990,
  },
  {
    name: "Second Best",
    likes: 708
  },
  {
    name: "Third Place",
    likes: 653,
  },
  {
    name: "Fading Out",
    likes: 588,
  },
  {
    name: "The Worst",
    likes: 220,
  }
]

export default function PopularComponents() {
  return (
    <Box>
      <Typography variant="h5">
        Popular Components
      </Typography>
      <List elementType="ol">
        {testComponents.map((e) => {
          return(
          <ListItem style={{display: "flex", flexDirection: "column"}}> 
            <ListItemText primary={e.name}/>
              <Box style={{display: "flex", flexDirection: "row"}}>
                <ListItemIcon>
                  <CloudDownloadOutlinedIcon size="medium"/>
                </ListItemIcon>
              <ListItemText primary={e.likes}/>
            </Box>
          </ListItem>
          )
        })}
      </List>
    </Box>
  )
}