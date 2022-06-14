import React from 'react';
import Link from 'next/link';
import { test } from '../../../test'
import { useRouter } from 'next/router';
import { Button } from '@supabase/ui';

const Nav: React.FC = () => {

  const router = useRouter();

  const defaultTools = [
    {
      name: "default"
    },
    {
      name: "nextjs"
    },
    {
      name: "blah"
    }  
  ]

  const { portalName, tool: navbarTool } = router.query;

  const toolList = defaultTools.concat(test);

  return (
    <nav className='tool-list-nav flex flex-row min-h-[50px] py-4 border-b'>
      {toolList.map((tool, index) => 
        <div className='px-3'>
          <Link
            className='nav-tool-item'
            href={tool.name === "nextjs" ?
              `${portalName}` :
              `${portalName}?tool=${tool.name}`
            }
            key={index}
          >
            <Button size='large' type={navbarTool === tool.name ? 'primary' : 'outline'}>
              <h5>
                {tool.name}
              </h5>
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Nav;