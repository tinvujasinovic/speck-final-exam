import React from 'react';
import { CardWrapper, CardHeader, StudnetName, Name, LastName, StudentEmail } from './UserCardStyle';

function UserCard({ student }) {

    return <CardWrapper>
        <CardHeader isAdmin={student.isAdmin}> {student.isAdmin ? "Admin":"Student"}</CardHeader>
        <StudnetName>
            <Name>{student.firstName}</Name>
            <LastName>
                {student.lastName}
            </LastName></StudnetName>
        <StudentEmail>{student.email}</StudentEmail>
    </CardWrapper>;
}

export default UserCard;
