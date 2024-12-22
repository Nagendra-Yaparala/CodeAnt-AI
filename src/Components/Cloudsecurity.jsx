import React from 'react'
import Design from './Design'

const Cloudsecurity = () => {
  const CloudeItems = [
    {
        id:1,
        title:'desing-system',
        privacy:'public',
        tech:'React',
        size:'7320 KB',
        updated_time:'Updated 1 day ago'
    },
    {
        id:2,
        title:'codeant-ci-app',
        privacy:'private',
        tech:'Javascript',
        size:'5871 KB',
        updated_time:'Updated 2 day ago'
    },
    {
        id:3,
        title:'analytics-dashboard',
        privacy:'private',
        tech:'Python',
        size:'4521 KB',
        updated_time:'Updated 5 day ago'
    },
    {
        id:4,
        title:'mobile-app',
        privacy:'public',
        tech:'Swift',
        size:'3096 KB',
        updated_time:'Updated 3 day ago'
    },
    {
        id:5,
        title:'e-commerce-platform',
        privacy:'private',
        tech:'Java',
        size:'6210 KB',
        updated_time:'Updated 6 day ago'
    },
    {
        id:6,
        title:'blog-website',
        privacy:'public',
        tech:'HTML/CSS',
        size:'1876 KB',
        updated_time:'Updated 4 day ago'
    },
    {
        id:7,
        title:'social-network',
        privacy:'private',
        tech:'PHP',
        size:'5432 KB',
        updated_time:'Updated 7 day ago'
    },
]
  return (
    <div>
        <Design DahboardItems={CloudeItems} title={'Cloud Security'}/>
    </div>
  )
}

export default Cloudsecurity