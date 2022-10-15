import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";

  const DeleteDoc = () => {

    const { id } = useParams();
    console.log(id);

};

  const DeleteDocumentation = () => {
    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <DeleteDoc/>
              </div>
              <div className="col-lg-12">
                
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default DeleteDocumentation;