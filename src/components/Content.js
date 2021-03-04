import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
    root: (props) =>({
        width: '100%',
        backgroundColor: props[6],
        minHeight:"1000px",
        marginTop:"0",
    }),
  
  })
const Content = ({id, color}) => {
    const classes = useStyles(color);
    const switchPage = () =>{
        if (id===1) return (
            <Paper className={classes.root} square elevation={5} style={{ color:"black", textIndent: "50px", letterSpacing:"2px", textAlign: "justify"}} >
            </Paper>
        )
        if (id===2) return (
            <Paper className={classes.root} square style={{backgroundColor:color[6]}} elevation={5} >
            </Paper>
        )
        if (id===3) return (
            <Paper className={classes.root} square style={{backgroundColor:color[6]}} elevation={5} >
            </Paper>
        )
        if (id===4) return (
            <Paper className={classes.root} square style={{backgroundColor:color[6]}} elevation={5} >
                <Grid container >
                    <Grid item xs={12} style={{textAlign:"center", fontSize:"20px"}}>
                        <h4>Công cụ dự tính tính điểm số cho sinh viên học theo<br/> phương pháp thành thạo bắt buộc</h4>

                    </Grid>
                    <Grid item>Chọn mã học phần</Grid>

                </Grid>
            </Paper>
        )
    }
    return (
        <div >
            <Grid container spacing={0} >
            <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}} >                        
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{paddingTop:"0px"}} >
                    
                    {switchPage()}
                        
                </Grid>
                    <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}}>
                        <Hidden xsDown>
                            <Paper style={{marginTop:"10px", minHeight:"300px", marginLeft:"5px", position:"sticky", top:"95px", border: "1px solid gray"}}>
                                chat
                            </Paper>
                        </Hidden>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Content
