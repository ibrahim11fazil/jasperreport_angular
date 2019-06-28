package qa.gov.customs.employee.entity;


import javax.persistence.Column;
        import javax.persistence.Entity;
        import javax.persistence.Id;
        import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="USER_SAP_WS_MINI")
public class MawaredMaster {

    @Id
    @Column(name="REC_ID")
    long REC_ID	;
    @Column(name="EMPNO")
    String EMPNO;
    @Column(name="EMP_STAT")
    String  EMP_STAT;
    @Column(name="LEGACYCODE")
    String LEGACYCODE;
    @Column(name="FOA")
    String FOA;
    @Column(name="FOA_DESC")
    String FOA_DESC;
    @Column(name="TITLE")
    String TITLE;
    @Column(name="FNAME_AR")
    String FNAME_AR;
    @Column(name="SNAME_AR")
    String SNAME_AR;
    @Column(name="TNAME_AR")
    String TNAME_AR;
    @Column(name="LNAME_AR")
    String LNAME_AR;
    @Column(name="CNAME_AR")
    String CNAME_AR;
    @Column(name="FNAME_EN")
    String FNAME_EN;
    @Column(name="SNAME_EN")
    String SNAME_EN;
    @Column(name="TNAME_EN")
    String TNAME_EN;
    @Column(name="LNAME_EN")
    String LNAME_EN;
    @Column(name="CNAME_EN")
    String CNAME_EN;
    @Column(name="GENDER")
    String GENDER;
    @Column(name="GENDER_DESC")
    String GENDER_DESC;
    @Column(name="DOB")
    String DOB;
    @Column(name="COB")
    String COB;
    @Column(name="COBDESC")
    String COBDESC;
    @Column(name="MARITAL")
    String MARITAL;
    @Column(name="MARITAL_DESC")
    String MARITAL_DESC;
    @Column(name="NATIO")
    String NATIO;
    @Column(name="NATIO_DESC")
    String NATIO_DESC	;
    @Column(name="QID")
    String QID;
    @Column(name="SHNO")
    String SHNO;
    @Column(name="ADRLINE")
    String ADRLINE;
    @Column(name="STRT2")
    String STRT2;
    @Column(name="STRT3")
    String STRT3;
    @Column(name="CITY")
    String CITY;
    @Column(name="COUNTRY_KEY")
    String COUNTRY_KEY;
    @Column(name="COUNTRY_KEYDESC")
    String COUNTRY_KEYDESC;
    @Column(name="POSTAL")
    String POSTAL;
    @Column(name="COM_HOUS")
    String COM_HOUS	;
    @Column(name="COMP_HOUSDESC")
    String COMP_HOUSDESC;
    @Column(name="EMAIL")
    String EMAIL;
    @Column(name="MOBILE")
    String MOBILE;
    @Column(name="SUSER")
    String SUSER;
    @Column(name="CERTF")
    String CERTF;
    @Column(name="CERTF_T")
    String CERTF_T;
    @Column(name="FOS")
    String FOS;
    @Column(name="EMPNFOS_TO")
    String FOS_T;
    @Column(name="GRAD_DATE")
    String GRAD_DATE;
    @Column(name="BKCOUN")
    String BKCOUN;
    @Column(name="BKCOUN_DESC")
    String BKCOUN_DESC;
    @Column(name="BKEY")
    String BKEY	;
    @Column(name="BKEY_DESC")
    String BKEY_DESC;
    @Column(name="BACNO")
    String BACNO	;
    @Column(name="BCITY")
    String BCITY	;
    @Column(name="BPOSCODE")
    String BPOSCODE	;
    @Column(name="BPAYTXT")
    String BPAYTXT	;
    @Column(name="BPAYMTD")
    String BPAYMTD	;
    @Column(name="BPAYMTD_DESC")
    String BPAYMTD_DESC	;
    @Column(name="HDATE")
    String  HDATE	;
    @Column(name="COMPCODE")
    String COMPCODE	;
    @Column(name="COMPCODE_DESC")
    String COMPCODE_DESC	;
    @Column(name="PERSAREA")
    String PERSAREA	;
    @Column(name="PERSAREA_DESC")
    String PERSAREA_DESC	;
    @Column(name="PERSSUBAREA")
    String PERSSUBAREA	;
    @Column(name="PERSSUBAREA_DESC")
    String PERSSUBAREA_DESC	;
    @Column(name="EMPGROUP")
    String EMPGROUP	;
    @Column(name="EMPGROUP_DESC")
    String EMPGROUP_DESC	;
    @Column(name="EMPSUBGROUP")
    String EMPSUBGROUP	;
    @Column(name="EMPSUBGROUP_DESC")
    String EMPSUBGROUP_DESC	;
    @Column(name="PAYAREA")
    String PAYAREA	;
    @Column(name="PAYAREA_DESC")
    String PAYAREA_DESC	;
    @Column(name="COSTCENTER")
    String COSTCENTER	;
    @Column(name="COSTCENTER_DESC")
    String COSTCENTER_DESC;


    @Column(name="ORGUNIT")
    String ORGUNIT	;
    @Column(name="ORGUNIT_DESC")
    String  ORGUNIT_DESC	;
    @Column(name="ORGUNIT_DESC_AR")
    String  ORGUNIT_DESC_AR	;
    @Column(name="POSITION")
    String POSITION	;
    @Column(name="POSITION_DESC")
    String POSITION_DESC	;
    @Column(name="POSITION_DESC_AR")
    String  POSITION_DESC_AR	;
    @Column(name="JOB")
    String  JOB	;
    @Column(name="JOB_DESC")
    String JOB_DESC	;
    @Column(name="JOB_DESC_AR")
    String  JOB_DESC_AR	;
    @Column(name="PSTYPE")
    String  PSTYPE	;
    @Column(name="PSTYPE_DESC")
    String  PSTYPE_DESC	;
    @Column(name="PSAREA")
    String  PSAREA	;
    @Column(name="PSAREA_DESC")
    String PSAREA_DESC	;
    @Column(name="PSGROUP")
    String PSGROUP	;
    @Column(name="PSLEVEL")
    String PSLEVEL	;
    @Column(name="DEPTYPE")
    String DEPTYPE	;

    @Column(name="DEPTYPE_DESC")
    String DEPTYPE_DESC	;
    @Column(name="DEPNAME")
    String DEPNAME	;
    @Column(name="DEPDOB")
    String DEPDOB	;
    @Column(name="DEPQID")
    String DEPQID	;
    @Column(name="DEPTIC")
    String DEPTIC	;
    @Column(name="RUN_DATE")
    Date RUN_DATE	;
    @Column(name="PER_STATUS")
    String PER_STATUS	;
    @Column(name="PER_ERR_MSG")
    String PER_ERR_MSG	;
    @Column(name="PER_EXECU_DATE")
    Date PER_EXECU_DATE	;
    @Column(name="ASS_STATUS")
    String ASS_STATUS	;
    @Column(name="ASS_ERR_MSG")
    String ASS_ERR_MSG	;
    @Column(name="ASS_EXECU_DATE")
    Date ASS_EXECU_DATE	;
    @Column(name="ACC_STATUS")
    String ACC_STATUS	;
    @Column(name="ACC_ERR_MSG")
    String ACC_ERR_MSG	;
    @Column(name="ACC_EXECU_DATE")
    Date ACC_EXECU_DATE	;
    @Column(name="HIRE_STATUS")
    String HIRE_STATUS	;
    @Column(name="HIRE_ERR_MSG")
    String HIRE_ERR_MSG	;
    @Column(name="HIRE_EXECU_DATE")
    Date HIRE_EXECU_DATE	;
    @Column(name="ADD_STATUS")
    String ADD_STATUS	;
    @Column(name="ADD_ERR_MSG")
    String ADD_ERR_MSG	;
    @Column(name="ADD_EXECU_DATE")
    Date ADD_EXECU_DATE	;
    @Column(name="PATCH_SEQ")
    long PATCH_SEQ;
    @Column(name="COMP_HOUS")
    String COMP_HOUS	;
    @Column(name="NATIO_DESC_A")
    String NATIO_DESC_A;
    @Column(name="CERTF_T_A")
    String CERTF_T_A	;
    @Column(name="FOS_T_A")
    String FOS_T_A	;
    @Column(name="LAST_UPDATE_LOGIN")
    long LAST_UPDATE_LOGIN	;
    @Column(name="LAST_UPDATED_BY")
    long LAST_UPDATED_BY	;
    @Column(name="LAST_UPDATE_DATE")
    Date LAST_UPDATE_DATE	;
    @Column(name="CREATED_BY")
    long CREATED_BY	;

    public long getREC_ID() {
        return REC_ID;
    }

    public void setREC_ID(long REC_ID) {
        this.REC_ID = REC_ID;
    }

    public String getEMPNO() {
        return EMPNO;
    }

    public void setEMPNO(String EMPNO) {
        this.EMPNO = EMPNO;
    }

    public String getEMP_STAT() {
        return EMP_STAT;
    }

    public void setEMP_STAT(String EMP_STAT) {
        this.EMP_STAT = EMP_STAT;
    }

    public String getLEGACYCODE() {
        return LEGACYCODE;
    }

    public void setLEGACYCODE(String LEGACYCODE) {
        this.LEGACYCODE = LEGACYCODE;
    }

    public String getFOA() {
        return FOA;
    }

    public void setFOA(String FOA) {
        this.FOA = FOA;
    }

    public String getFOA_DESC() {
        return FOA_DESC;
    }

    public void setFOA_DESC(String FOA_DESC) {
        this.FOA_DESC = FOA_DESC;
    }

    public String getTITLE() {
        return TITLE;
    }

    public void setTITLE(String TITLE) {
        this.TITLE = TITLE;
    }

    public String getFNAME_AR() {
        return FNAME_AR;
    }

    public void setFNAME_AR(String FNAME_AR) {
        this.FNAME_AR = FNAME_AR;
    }

    public String getSNAME_AR() {
        return SNAME_AR;
    }

    public void setSNAME_AR(String SNAME_AR) {
        this.SNAME_AR = SNAME_AR;
    }

    public String getTNAME_AR() {
        return TNAME_AR;
    }

    public void setTNAME_AR(String TNAME_AR) {
        this.TNAME_AR = TNAME_AR;
    }

    public String getLNAME_AR() {
        return LNAME_AR;
    }

    public void setLNAME_AR(String LNAME_AR) {
        this.LNAME_AR = LNAME_AR;
    }

    public String getCNAME_AR() {
        return CNAME_AR;
    }

    public void setCNAME_AR(String CNAME_AR) {
        this.CNAME_AR = CNAME_AR;
    }

    public String getFNAME_EN() {
        return FNAME_EN;
    }

    public void setFNAME_EN(String FNAME_EN) {
        this.FNAME_EN = FNAME_EN;
    }

    public String getSNAME_EN() {
        return SNAME_EN;
    }

    public void setSNAME_EN(String SNAME_EN) {
        this.SNAME_EN = SNAME_EN;
    }

    public String getTNAME_EN() {
        return TNAME_EN;
    }

    public void setTNAME_EN(String TNAME_EN) {
        this.TNAME_EN = TNAME_EN;
    }

    public String getLNAME_EN() {
        return LNAME_EN;
    }

    public void setLNAME_EN(String LNAME_EN) {
        this.LNAME_EN = LNAME_EN;
    }

    public String getCNAME_EN() {
        return CNAME_EN;
    }

    public void setCNAME_EN(String CNAME_EN) {
        this.CNAME_EN = CNAME_EN;
    }

    public String getGENDER() {
        return GENDER;
    }

    public void setGENDER(String GENDER) {
        this.GENDER = GENDER;
    }

    public String getGENDER_DESC() {
        return GENDER_DESC;
    }

    public void setGENDER_DESC(String GENDER_DESC) {
        this.GENDER_DESC = GENDER_DESC;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public String getCOB() {
        return COB;
    }

    public void setCOB(String COB) {
        this.COB = COB;
    }

    public String getCOBDESC() {
        return COBDESC;
    }

    public void setCOBDESC(String COBDESC) {
        this.COBDESC = COBDESC;
    }

    public String getMARITAL() {
        return MARITAL;
    }

    public void setMARITAL(String MARITAL) {
        this.MARITAL = MARITAL;
    }

    public String getMARITAL_DESC() {
        return MARITAL_DESC;
    }

    public void setMARITAL_DESC(String MARITAL_DESC) {
        this.MARITAL_DESC = MARITAL_DESC;
    }

    public String getNATIO() {
        return NATIO;
    }

    public void setNATIO(String NATIO) {
        this.NATIO = NATIO;
    }

    public String getNATIO_DESC() {
        return NATIO_DESC;
    }

    public void setNATIO_DESC(String NATIO_DESC) {
        this.NATIO_DESC = NATIO_DESC;
    }

    public String getQID() {
        return QID;
    }

    public void setQID(String QID) {
        this.QID = QID;
    }

    public String getSHNO() {
        return SHNO;
    }

    public void setSHNO(String SHNO) {
        this.SHNO = SHNO;
    }

    public String getADRLINE() {
        return ADRLINE;
    }

    public void setADRLINE(String ADRLINE) {
        this.ADRLINE = ADRLINE;
    }

    public String getSTRT2() {
        return STRT2;
    }

    public void setSTRT2(String STRT2) {
        this.STRT2 = STRT2;
    }

    public String getSTRT3() {
        return STRT3;
    }

    public void setSTRT3(String STRT3) {
        this.STRT3 = STRT3;
    }

    public String getCITY() {
        return CITY;
    }

    public void setCITY(String CITY) {
        this.CITY = CITY;
    }

    public String getCOUNTRY_KEY() {
        return COUNTRY_KEY;
    }

    public void setCOUNTRY_KEY(String COUNTRY_KEY) {
        this.COUNTRY_KEY = COUNTRY_KEY;
    }

    public String getCOUNTRY_KEYDESC() {
        return COUNTRY_KEYDESC;
    }

    public void setCOUNTRY_KEYDESC(String COUNTRY_KEYDESC) {
        this.COUNTRY_KEYDESC = COUNTRY_KEYDESC;
    }

    public String getPOSTAL() {
        return POSTAL;
    }

    public void setPOSTAL(String POSTAL) {
        this.POSTAL = POSTAL;
    }

    public String getCOM_HOUS() {
        return COM_HOUS;
    }

    public void setCOM_HOUS(String COM_HOUS) {
        this.COM_HOUS = COM_HOUS;
    }

    public String getCOMP_HOUSDESC() {
        return COMP_HOUSDESC;
    }

    public void setCOMP_HOUSDESC(String COMP_HOUSDESC) {
        this.COMP_HOUSDESC = COMP_HOUSDESC;
    }

    public String getEMAIL() {
        return EMAIL;
    }

    public void setEMAIL(String EMAIL) {
        this.EMAIL = EMAIL;
    }

    public String getMOBILE() {
        return MOBILE;
    }

    public void setMOBILE(String MOBILE) {
        this.MOBILE = MOBILE;
    }

    public String getSUSER() {
        return SUSER;
    }

    public void setSUSER(String SUSER) {
        this.SUSER = SUSER;
    }

    public String getCERTF() {
        return CERTF;
    }

    public void setCERTF(String CERTF) {
        this.CERTF = CERTF;
    }

    public String getCERTF_T() {
        return CERTF_T;
    }

    public void setCERTF_T(String CERTF_T) {
        this.CERTF_T = CERTF_T;
    }

    public String getFOS() {
        return FOS;
    }

    public void setFOS(String FOS) {
        this.FOS = FOS;
    }

    public String getFOS_T() {
        return FOS_T;
    }

    public void setFOS_T(String FOS_T) {
        this.FOS_T = FOS_T;
    }

    public String getGRAD_DATE() {
        return GRAD_DATE;
    }

    public void setGRAD_DATE(String GRAD_DATE) {
        this.GRAD_DATE = GRAD_DATE;
    }

    public String getBKCOUN() {
        return BKCOUN;
    }

    public void setBKCOUN(String BKCOUN) {
        this.BKCOUN = BKCOUN;
    }

    public String getBKCOUN_DESC() {
        return BKCOUN_DESC;
    }

    public void setBKCOUN_DESC(String BKCOUN_DESC) {
        this.BKCOUN_DESC = BKCOUN_DESC;
    }

    public String getBKEY() {
        return BKEY;
    }

    public void setBKEY(String BKEY) {
        this.BKEY = BKEY;
    }

    public String getBKEY_DESC() {
        return BKEY_DESC;
    }

    public void setBKEY_DESC(String BKEY_DESC) {
        this.BKEY_DESC = BKEY_DESC;
    }

    public String getBACNO() {
        return BACNO;
    }

    public void setBACNO(String BACNO) {
        this.BACNO = BACNO;
    }

    public String getBCITY() {
        return BCITY;
    }

    public void setBCITY(String BCITY) {
        this.BCITY = BCITY;
    }

    public String getBPOSCODE() {
        return BPOSCODE;
    }

    public void setBPOSCODE(String BPOSCODE) {
        this.BPOSCODE = BPOSCODE;
    }

    public String getBPAYTXT() {
        return BPAYTXT;
    }

    public void setBPAYTXT(String BPAYTXT) {
        this.BPAYTXT = BPAYTXT;
    }

    public String getBPAYMTD() {
        return BPAYMTD;
    }

    public void setBPAYMTD(String BPAYMTD) {
        this.BPAYMTD = BPAYMTD;
    }

    public String getBPAYMTD_DESC() {
        return BPAYMTD_DESC;
    }

    public void setBPAYMTD_DESC(String BPAYMTD_DESC) {
        this.BPAYMTD_DESC = BPAYMTD_DESC;
    }

    public String getHDATE() {
        return HDATE;
    }

    public void setHDATE(String HDATE) {
        this.HDATE = HDATE;
    }

    public String getCOMPCODE() {
        return COMPCODE;
    }

    public void setCOMPCODE(String COMPCODE) {
        this.COMPCODE = COMPCODE;
    }

    public String getCOMPCODE_DESC() {
        return COMPCODE_DESC;
    }

    public void setCOMPCODE_DESC(String COMPCODE_DESC) {
        this.COMPCODE_DESC = COMPCODE_DESC;
    }

    public String getPERSAREA() {
        return PERSAREA;
    }

    public void setPERSAREA(String PERSAREA) {
        this.PERSAREA = PERSAREA;
    }

    public String getPERSAREA_DESC() {
        return PERSAREA_DESC;
    }

    public void setPERSAREA_DESC(String PERSAREA_DESC) {
        this.PERSAREA_DESC = PERSAREA_DESC;
    }

    public String getPERSSUBAREA() {
        return PERSSUBAREA;
    }

    public void setPERSSUBAREA(String PERSSUBAREA) {
        this.PERSSUBAREA = PERSSUBAREA;
    }

    public String getPERSSUBAREA_DESC() {
        return PERSSUBAREA_DESC;
    }

    public void setPERSSUBAREA_DESC(String PERSSUBAREA_DESC) {
        this.PERSSUBAREA_DESC = PERSSUBAREA_DESC;
    }

    public String getEMPGROUP() {
        return EMPGROUP;
    }

    public void setEMPGROUP(String EMPGROUP) {
        this.EMPGROUP = EMPGROUP;
    }

    public String getEMPGROUP_DESC() {
        return EMPGROUP_DESC;
    }

    public void setEMPGROUP_DESC(String EMPGROUP_DESC) {
        this.EMPGROUP_DESC = EMPGROUP_DESC;
    }

    public String getEMPSUBGROUP() {
        return EMPSUBGROUP;
    }

    public void setEMPSUBGROUP(String EMPSUBGROUP) {
        this.EMPSUBGROUP = EMPSUBGROUP;
    }

    public String getEMPSUBGROUP_DESC() {
        return EMPSUBGROUP_DESC;
    }

    public void setEMPSUBGROUP_DESC(String EMPSUBGROUP_DESC) {
        this.EMPSUBGROUP_DESC = EMPSUBGROUP_DESC;
    }

    public String getPAYAREA() {
        return PAYAREA;
    }

    public void setPAYAREA(String PAYAREA) {
        this.PAYAREA = PAYAREA;
    }

    public String getPAYAREA_DESC() {
        return PAYAREA_DESC;
    }

    public void setPAYAREA_DESC(String PAYAREA_DESC) {
        this.PAYAREA_DESC = PAYAREA_DESC;
    }

    public String getCOSTCENTER() {
        return COSTCENTER;
    }

    public void setCOSTCENTER(String COSTCENTER) {
        this.COSTCENTER = COSTCENTER;
    }

    public String getCOSTCENTER_DESC() {
        return COSTCENTER_DESC;
    }

    public void setCOSTCENTER_DESC(String COSTCENTER_DESC) {
        this.COSTCENTER_DESC = COSTCENTER_DESC;
    }

    public String getORGUNIT() {
        return ORGUNIT;
    }

    public void setORGUNIT(String ORGUNIT) {
        this.ORGUNIT = ORGUNIT;
    }

    public String getORGUNIT_DESC() {
        return ORGUNIT_DESC;
    }

    public void setORGUNIT_DESC(String ORGUNIT_DESC) {
        this.ORGUNIT_DESC = ORGUNIT_DESC;
    }

    public String getORGUNIT_DESC_AR() {
        return ORGUNIT_DESC_AR;
    }

    public void setORGUNIT_DESC_AR(String ORGUNIT_DESC_AR) {
        this.ORGUNIT_DESC_AR = ORGUNIT_DESC_AR;
    }

    public String getPOSITION() {
        return POSITION;
    }

    public void setPOSITION(String POSITION) {
        this.POSITION = POSITION;
    }

    public String getPOSITION_DESC() {
        return POSITION_DESC;
    }

    public void setPOSITION_DESC(String POSITION_DESC) {
        this.POSITION_DESC = POSITION_DESC;
    }

    public String getPOSITION_DESC_AR() {
        return POSITION_DESC_AR;
    }

    public void setPOSITION_DESC_AR(String POSITION_DESC_AR) {
        this.POSITION_DESC_AR = POSITION_DESC_AR;
    }

    public String getJOB() {
        return JOB;
    }

    public void setJOB(String JOB) {
        this.JOB = JOB;
    }

    public String getJOB_DESC() {
        return JOB_DESC;
    }

    public void setJOB_DESC(String JOB_DESC) {
        this.JOB_DESC = JOB_DESC;
    }

    public String getJOB_DESC_AR() {
        return JOB_DESC_AR;
    }

    public void setJOB_DESC_AR(String JOB_DESC_AR) {
        this.JOB_DESC_AR = JOB_DESC_AR;
    }

    public String getPSTYPE() {
        return PSTYPE;
    }

    public void setPSTYPE(String PSTYPE) {
        this.PSTYPE = PSTYPE;
    }

    public String getPSTYPE_DESC() {
        return PSTYPE_DESC;
    }

    public void setPSTYPE_DESC(String PSTYPE_DESC) {
        this.PSTYPE_DESC = PSTYPE_DESC;
    }

    public String getPSAREA() {
        return PSAREA;
    }

    public void setPSAREA(String PSAREA) {
        this.PSAREA = PSAREA;
    }

    public String getPSAREA_DESC() {
        return PSAREA_DESC;
    }

    public void setPSAREA_DESC(String PSAREA_DESC) {
        this.PSAREA_DESC = PSAREA_DESC;
    }

    public String getPSGROUP() {
        return PSGROUP;
    }

    public void setPSGROUP(String PSGROUP) {
        this.PSGROUP = PSGROUP;
    }

    public String getPSLEVEL() {
        return PSLEVEL;
    }

    public void setPSLEVEL(String PSLEVEL) {
        this.PSLEVEL = PSLEVEL;
    }

    public String getDEPTYPE() {
        return DEPTYPE;
    }

    public void setDEPTYPE(String DEPTYPE) {
        this.DEPTYPE = DEPTYPE;
    }

    public String getDEPTYPE_DESC() {
        return DEPTYPE_DESC;
    }

    public void setDEPTYPE_DESC(String DEPTYPE_DESC) {
        this.DEPTYPE_DESC = DEPTYPE_DESC;
    }

    public String getDEPNAME() {
        return DEPNAME;
    }

    public void setDEPNAME(String DEPNAME) {
        this.DEPNAME = DEPNAME;
    }

    public String getDEPDOB() {
        return DEPDOB;
    }

    public void setDEPDOB(String DEPDOB) {
        this.DEPDOB = DEPDOB;
    }

    public String getDEPQID() {
        return DEPQID;
    }

    public void setDEPQID(String DEPQID) {
        this.DEPQID = DEPQID;
    }

    public String getDEPTIC() {
        return DEPTIC;
    }

    public void setDEPTIC(String DEPTIC) {
        this.DEPTIC = DEPTIC;
    }

    public Date getRUN_DATE() {
        return RUN_DATE;
    }

    public void setRUN_DATE(Date RUN_DATE) {
        this.RUN_DATE = RUN_DATE;
    }

    public String getPER_STATUS() {
        return PER_STATUS;
    }

    public void setPER_STATUS(String PER_STATUS) {
        this.PER_STATUS = PER_STATUS;
    }

    public String getPER_ERR_MSG() {
        return PER_ERR_MSG;
    }

    public void setPER_ERR_MSG(String PER_ERR_MSG) {
        this.PER_ERR_MSG = PER_ERR_MSG;
    }

    public Date getPER_EXECU_DATE() {
        return PER_EXECU_DATE;
    }

    public void setPER_EXECU_DATE(Date PER_EXECU_DATE) {
        this.PER_EXECU_DATE = PER_EXECU_DATE;
    }

    public String getASS_STATUS() {
        return ASS_STATUS;
    }

    public void setASS_STATUS(String ASS_STATUS) {
        this.ASS_STATUS = ASS_STATUS;
    }

    public String getASS_ERR_MSG() {
        return ASS_ERR_MSG;
    }

    public void setASS_ERR_MSG(String ASS_ERR_MSG) {
        this.ASS_ERR_MSG = ASS_ERR_MSG;
    }

    public Date getASS_EXECU_DATE() {
        return ASS_EXECU_DATE;
    }

    public void setASS_EXECU_DATE(Date ASS_EXECU_DATE) {
        this.ASS_EXECU_DATE = ASS_EXECU_DATE;
    }

    public String getACC_STATUS() {
        return ACC_STATUS;
    }

    public void setACC_STATUS(String ACC_STATUS) {
        this.ACC_STATUS = ACC_STATUS;
    }

    public String getACC_ERR_MSG() {
        return ACC_ERR_MSG;
    }

    public void setACC_ERR_MSG(String ACC_ERR_MSG) {
        this.ACC_ERR_MSG = ACC_ERR_MSG;
    }

    public Date getACC_EXECU_DATE() {
        return ACC_EXECU_DATE;
    }

    public void setACC_EXECU_DATE(Date ACC_EXECU_DATE) {
        this.ACC_EXECU_DATE = ACC_EXECU_DATE;
    }

    public String getHIRE_STATUS() {
        return HIRE_STATUS;
    }

    public void setHIRE_STATUS(String HIRE_STATUS) {
        this.HIRE_STATUS = HIRE_STATUS;
    }

    public String getHIRE_ERR_MSG() {
        return HIRE_ERR_MSG;
    }

    public void setHIRE_ERR_MSG(String HIRE_ERR_MSG) {
        this.HIRE_ERR_MSG = HIRE_ERR_MSG;
    }

    public Date getHIRE_EXECU_DATE() {
        return HIRE_EXECU_DATE;
    }

    public void setHIRE_EXECU_DATE(Date HIRE_EXECU_DATE) {
        this.HIRE_EXECU_DATE = HIRE_EXECU_DATE;
    }

    public String getADD_STATUS() {
        return ADD_STATUS;
    }

    public void setADD_STATUS(String ADD_STATUS) {
        this.ADD_STATUS = ADD_STATUS;
    }

    public String getADD_ERR_MSG() {
        return ADD_ERR_MSG;
    }

    public void setADD_ERR_MSG(String ADD_ERR_MSG) {
        this.ADD_ERR_MSG = ADD_ERR_MSG;
    }

    public Date getADD_EXECU_DATE() {
        return ADD_EXECU_DATE;
    }

    public void setADD_EXECU_DATE(Date ADD_EXECU_DATE) {
        this.ADD_EXECU_DATE = ADD_EXECU_DATE;
    }

    public long getPATCH_SEQ() {
        return PATCH_SEQ;
    }

    public void setPATCH_SEQ(long PATCH_SEQ) {
        this.PATCH_SEQ = PATCH_SEQ;
    }

    public String getCOMP_HOUS() {
        return COMP_HOUS;
    }

    public void setCOMP_HOUS(String COMP_HOUS) {
        this.COMP_HOUS = COMP_HOUS;
    }

    public String getNATIO_DESC_A() {
        return NATIO_DESC_A;
    }

    public void setNATIO_DESC_A(String NATIO_DESC_A) {
        this.NATIO_DESC_A = NATIO_DESC_A;
    }

    public String getCERTF_T_A() {
        return CERTF_T_A;
    }

    public void setCERTF_T_A(String CERTF_T_A) {
        this.CERTF_T_A = CERTF_T_A;
    }

    public String getFOS_T_A() {
        return FOS_T_A;
    }

    public void setFOS_T_A(String FOS_T_A) {
        this.FOS_T_A = FOS_T_A;
    }

    public long getLAST_UPDATE_LOGIN() {
        return LAST_UPDATE_LOGIN;
    }

    public void setLAST_UPDATE_LOGIN(long LAST_UPDATE_LOGIN) {
        this.LAST_UPDATE_LOGIN = LAST_UPDATE_LOGIN;
    }

    public long getLAST_UPDATED_BY() {
        return LAST_UPDATED_BY;
    }

    public void setLAST_UPDATED_BY(long LAST_UPDATED_BY) {
        this.LAST_UPDATED_BY = LAST_UPDATED_BY;
    }

    public Date getLAST_UPDATE_DATE() {
        return LAST_UPDATE_DATE;
    }

    public void setLAST_UPDATE_DATE(Date LAST_UPDATE_DATE) {
        this.LAST_UPDATE_DATE = LAST_UPDATE_DATE;
    }

    public long getCREATED_BY() {
        return CREATED_BY;
    }

    public void setCREATED_BY(long CREATED_BY) {
        this.CREATED_BY = CREATED_BY;
    }
}
