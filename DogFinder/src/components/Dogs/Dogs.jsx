
import { useState } from "react";
import { Grid } from "@mui/material";
import DogCard from "../DogCard";
import './Dogs.css'
import { SkeletonCard } from "../SkeletonCard";
import { ErrorPage } from "../ErrorPage";


export const Dogs = ({dogs, isLoading, isError, focusInput}) => {

    if(isError){
       return <ErrorPage focusInput={focusInput}/>
    }


    if(isLoading==true){
        return(
            <div className="contain">
                <p className="text">Dogs</p>
                <Grid item >
                    <Grid container spacing={2}>
                        {dogs.splice(0,20).map((el) => (
                            <Grid item xs={3}>
                                <SkeletonCard/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        )
    }

return (
        <div className="contain">
            <p className="text">Dogs</p>
            <Grid item >
                <Grid container spacing={2}>
                    {dogs.splice(0,20).map((el, index) => (
                        <Grid item xs={3}>
                            <DogCard el={el} key={index}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}