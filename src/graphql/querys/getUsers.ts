import {gql} from '@apollo/client'


export const getUsersList = gql`
query {
    task_usersList{
        count
        items{
            id
            email
            username
        }
    }
}
`

