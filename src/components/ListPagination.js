import React from 'react'

import { TableRow, TablePagination } from 'material-ui/Table';

class ListPagination extends React.Component {
    render() {
        return (
            <TableRow>
                <TablePagination
                    colSpan={5}
                    count={this.props.tableData.length}
                    rowsPerPage={this.props.rowsPerPage}
                    rowsPerPageOptions={[5, 10, 15]}
                    page={this.props.page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.props.handleChangePage}
                    onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
                />
            </TableRow>
        )
    }
}

export default ListPagination;