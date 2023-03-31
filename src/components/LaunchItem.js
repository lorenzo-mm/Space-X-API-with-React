import { IoCalendarClear } from 'react-icons/io5';
import { Tag, Button, Icon } from '@chakra-ui/react';
import './launchitem.css'


export function LaunchItem(launch) {
  return (
    <main className='Main'>
      <div className='Box'>
        <div className='Flex'>
          <h2 className='Text'>
            Mission <strong>{launch.mission_name}</strong> (
            {launch.launch_year})
          </h2>
          <Tag className='Tag' colorScheme={launch.launch_success ? "green" : "red"}>
            {launch.launch_success ? "Success" : "Failure"}
          </Tag>
        </div>

        <div className='Flex'>
          <Icon className='Icon' as={IoCalendarClear} />
          <h4 className='Description' >
            {launch.launch_date_local.split("T")[0]}
          </h4>
        </div>
      <Button className='Button'>More Details</Button>
    </div>
  </main>
  )
}