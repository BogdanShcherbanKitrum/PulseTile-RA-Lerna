import React from "react";
import moment from "moment";

import TableCell from '@material-ui/core/TableCell';

import CustomDatagridRow from "../../../common/ResourseTemplates/ListTemplate/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../common/ResourseTemplates/ListTemplate/fragments/constants";

const PersonalNotesDatagridRow = props => {
    const { record } = props;
    if (!record) {
        return null;
    }
    return (
        <CustomDatagridRow {...props} >
            <TableCell key={`${record.id}-noteType`}>
                {record.noteType}
            </TableCell>
            <TableCell key={`${record.id}-author`}>
                {record.author}
            </TableCell>
            <TableCell key={`${record.id}-dateCreated`}>
                {moment(record.dateCreated).format(DATE_FORMAT)}
            </TableCell>
            <TableCell key={`${record.id}-source`}>
                {record.source}
            </TableCell>
        </CustomDatagridRow>
    );
};

export default PersonalNotesDatagridRow;
