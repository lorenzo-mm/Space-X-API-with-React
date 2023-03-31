import { IoCalendarClear } from 'react-icons/io5';
import { Icon, Tag } from '@chakra-ui/react';
import './launchitem.css'


export function LaunchItem(launch) {
  return (
    <container className='Main'>
      <div className='Box'>
        <div className='Flex'>
          <h2 className='Text'>
            Mission <strong>{launch.mission_name}</strong> (
            {launch.launch_year})
          </h2>
          <Tag className='Tag' color={launch.launch_success ? "green" : "red"}>
            {launch.launch_success ? "Success" : "Failure"}
          </Tag>
        </div>

        <div className='Flex'>
          <Icon className='Icon' as={IoCalendarClear} />
          <h4 className='Description' >
            {launch.launch_date_local.split("T")[0]}
          </h4>
        </div>
        <button className='Button'>More Details</button>
      </div>
    </container>
  )
}