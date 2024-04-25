from fastapi import  status, HTTPException,APIRouter,Form,Cookie,Request
from .. import schemas,oath2
import psycopg2
from psycopg2.extras import RealDictCursor
from ..config import settings
import time
from typing import Any
import os
from typing_extensions import Annotated
from pydantic.functional_validators import BeforeValidator
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

templates= Jinja2Templates(directory="./templates")

router= APIRouter(
    
    prefix="/tableau",
    tags=["Tableau"]
)


@router.get('/tableau_html_panel/',response_class=HTMLResponse)
def complaints_html(request: Request,login: str = Cookie(None)):

    while True:
        try:

            try:
                credentials=oath2.decode_access_token(login)

                if dict(credentials).get("role") == "superadmin":
                    login_role_value="superadmin"
                elif dict(credentials).get("role") == "firm":
                    login_role_value="firm"
                else:
                    login_role_value="talent"


            except:
                login_role_value="None"
                pass

            if login_role_value=="superadmin":

                context={'request': request,'login_role':login_role_value}
                return templates.TemplateResponse("14_tableau",context)
            else:
                                
                context={'request': request}
                return templates.TemplateResponse("4_log_in.html",context)
        except:
            time.sleep(1)
            pass