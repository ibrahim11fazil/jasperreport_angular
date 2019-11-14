package qa.gov.customs.employee.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "USER_SAP_WS_MINI")
public class MawaredMaster {

    @Id
    @Column(name = "REC_ID")
    long REC_ID;
    @Column(name = "EMPNO")
    String EMPNO;
    @Column(name = "EMP_STAT")
    String EMP_STAT;
    @Column(name = "LEGACYCODE")
    String LEGACYCODE;
    @Column(name = "FOA")
    String FOA;
    @Column(name = "FOA_DESC")
    String FOA_DESC;
    @Column(name = "TITLE")
    String TITLE;
    //    @Column(name="FNAME_AR")
//    String FNAME_AR;
//    @Column(name="SNAME_AR")
//    String SNAME_AR;
//    @Column(name="TNAME_AR")
//    String TNAME_AR;
//    @Column(name="LNAME_AR")
//    String LNAME_AR;
    @Column(name = "CNAME_AR")
    String CNAME_AR;
    //    @Column(name="FNAME_EN")
//    String FNAME_EN;
//    @Column(name="SNAME_EN")
//    String SNAME_EN;
//    @Column(name="TNAME_EN")
//    String TNAME_EN;
//    @Column(name="LNAME_EN")
//    String LNAME_EN;
    @Column(name="CNAME_EN")
    String CNAME_EN;
    @Column(name = "GENDER")
    String GENDER;
    @Column(name = "GENDER_DESC")
    String GENDER_DESC;
    @Column(name = "DOB")
    String DOB;
    //    @Column(name="COB")
//    String COB;
//    @Column(name="COBDESC")
//    String COBDESC;
//    @Column(name="MARITAL")
//    String MARITAL;
//    @Column(name="MARITAL_DESC")
//    String MARITAL_DESC;
    @Column(name = "NATIO")
    String NATIO;
    @Column(name = "NATIO_DESC")
    String NATIO_DESC;
    @Column(name = "QID")
    String QID;
    //    @Column(name="SHNO")
//    String SHNO;
//    @Column(name="ADRLINE")
//    String ADRLINE;
//    @Column(name="STRT2")
//    String STRT2;
//    @Column(name="STRT3")
//    String STRT3;
//    @Column(name="CITY")
//    String CITY;
    @Column(name = "COUNTRY_KEY")
    String COUNTRY_KEY;
    @Column(name = "COUNTRY_KEYDESC")
    String COUNTRY_KEYDESC;
    //    @Column(name="POSTAL")
//    String POSTAL;
//    @Column(name="COM_HOUS")
//    String COM_HOUS	;
//    @Column(name="COMP_HOUSDESC")
//    String COMP_HOUSDESC;
    @Column(name = "EMAIL")
    String EMAIL;
    @Column(name = "MOBILE")
    String MOBILE;
    //    @Column(name="SUSER")
//    String SUSER;
//    @Column(name="CERTF")
//    String CERTF;
    @Column(name="CERTF_T")
    String CERTF_T;
//    @Column(name="FOS")
//    String FOS;
//    @Column(name="EMPNFOS_TO")
//    String FOS_T;
//    @Column(name="GRAD_DATE")
//    String GRAD_DATE;
//    @Column(name="BKCOUN")
//    String BKCOUN;
//    @Column(name="BKCOUN_DESC")
//    String BKCOUN_DESC;
    @Column(name = "BKEY")
    String BKEY;
    //    @Column(name="BKEY_DESC")
//    String BKEY_DESC;
    @Column(name = "BACNO")
    String BACNO;
//    @Column(name="BCITY")
//    String BCITY	;
//    @Column(name="BPOSCODE")
//    String BPOSCODE	;
//    @Column(name="BPAYTXT")
//    String BPAYTXT	;
//    @Column(name="BPAYMTD")
//    String BPAYMTD	;
//    @Column(name="BPAYMTD_DESC")
//    String BPAYMTD_DESC	;
//    @Column(name="HDATE")
//    String  HDATE	;
//    @Column(name="COMPCODE")
//    String COMPCODE	;
//    @Column(name="COMPCODE_DESC")
//    String COMPCODE_DESC	;
//    @Column(name="PERSAREA")
//    String PERSAREA	;
//    @Column(name="PERSAREA_DESC")
//    String PERSAREA_DESC	;
//    @Column(name="PERSSUBAREA")
//    String PERSSUBAREA	;
//    @Column(name="PERSSUBAREA_DESC")
//    String PERSSUBAREA_DESC	;
//    @Column(name="EMPGROUP")
//    String EMPGROUP	;
//    @Column(name="EMPGROUP_DESC")
//    String EMPGROUP_DESC	;
//    @Column(name="EMPSUBGROUP")
//    String EMPSUBGROUP	;
//    @Column(name="EMPSUBGROUP_DESC")
//    String EMPSUBGROUP_DESC	;
//    @Column(name="PAYAREA")
//    String PAYAREA	;
//    @Column(name="PAYAREA_DESC")
//    String PAYAREA_DESC	;
//    @Column(name="COSTCENTER")
//    String COSTCENTER	;
//    @Column(name="COSTCENTER_DESC")
//    String COSTCENTER_DESC;


    @Column(name = "ORGUNIT")
    String ORGUNIT;
    @Column(name = "ORGUNIT_DESC")
    String ORGUNIT_DESC;
    @Column(name = "ORGUNIT_DESC_AR")
    String ORGUNIT_DESC_AR;
    @Column(name = "POSITION")
    String POSITION;
    @Column(name = "POSITION_DESC")
    String POSITION_DESC;
    @Column(name = "POSITION_DESC_AR")
    String POSITION_DESC_AR;
    @Column(name = "JOB")
    String JOB;
    @Column(name = "JOB_DESC")
    String JOB_DESC;
    @Column(name = "JOB_DESC_AR")
    String JOB_DESC_AR;
    //    @Column(name="PSTYPE")
//    String  PSTYPE	;
//    @Column(name="PSTYPE_DESC")
//    String  PSTYPE_DESC	;
//    @Column(name="PSAREA")
//    String  PSAREA	;
//    @Column(name="PSAREA_DESC")
//    String PSAREA_DESC	;
//    @Column(name="PSGROUP")
//    String PSGROUP	;
    @Column(name = "PSLEVEL")
    String PSLEVEL;
//    @Column(name="DEPTYPE")
//    String DEPTYPE	;
//    @Column(name="DEPTYPE_DESC")
//    String DEPTYPE_DESC	;
//    @Column(name="DEPNAME")
//    String DEPNAME	;
//    @Column(name="DEPDOB")
//    String DEPDOB	;
//    @Column(name="DEPQID")
//    String DEPQID	;
//    @Column(name="DEPTIC")
//    String DEPTIC	;

    @Column(name = "RUN_DATE")
    Date RUN_DATE;

//    @Column(name="PER_STATUS")
//    String PER_STATUS	;
//    @Column(name="PER_ERR_MSG")
//    String PER_ERR_MSG	;
//    @Column(name="PER_EXECU_DATE")
//    Date PER_EXECU_DATE	;
//    @Column(name="ASS_STATUS")
//    String ASS_STATUS	;
//    @Column(name="ASS_ERR_MSG")
//    String ASS_ERR_MSG	;
//    @Column(name="ASS_EXECU_DATE")
//    Date ASS_EXECU_DATE	;
//    @Column(name="ACC_STATUS")
//    String ACC_STATUS	;
//    @Column(name="ACC_ERR_MSG")
//    String ACC_ERR_MSG	;
//    @Column(name="ACC_EXECU_DATE")
//    Date ACC_EXECU_DATE	;
//    @Column(name="HIRE_STATUS")
//    String HIRE_STATUS	;
//    @Column(name="HIRE_ERR_MSG")
//    String HIRE_ERR_MSG	;
//    @Column(name="HIRE_EXECU_DATE")
//    Date HIRE_EXECU_DATE	;
//    @Column(name="ADD_STATUS")
//    String ADD_STATUS	;
//    @Column(name="ADD_ERR_MSG")
//    String ADD_ERR_MSG	;
//    @Column(name="ADD_EXECU_DATE")
//    Date ADD_EXECU_DATE	;
//    @Column(name="PATCH_SEQ")
//    long PATCH_SEQ;
//    @Column(name="COMP_HOUS")
//    String COMP_HOUS	;
//    @Column(name="NATIO_DESC_A")
//    String NATIO_DESC_A;
//    @Column(name="CERTF_T_A")
//    String CERTF_T_A	;
//    @Column(name="FOS_T_A")
//    String FOS_T_A	;
//    @Column(name="LAST_UPDATE_LOGIN")
//    long LAST_UPDATE_LOGIN	;
//    @Column(name="LAST_UPDATED_BY")
//    long LAST_UPDATED_BY	;
//    @Column(name="LAST_UPDATE_DATE")
//    Date LAST_UPDATE_DATE	;
//    @Column(name="CREATED_BY")
//    long CREATED_BY	;
//    @Column(name="CREATION_DATE")
//    Date CREATION_DATE	;
@Transient
public Date currentGradeDate;
@Transient
public Date nextGradeDate;

    @Transient
    public Date getCurrentGradeDate() {
        return currentGradeDate;
    }

    public void setCurrentGradeDate(Date currentGradeDate) {
        this.currentGradeDate = currentGradeDate;
    }
    @Transient
    public Date getNextGradeDate() {
        return nextGradeDate;
    }

    public void setNextGradeDate(Date nextGradeDate) {
        this.nextGradeDate = nextGradeDate;
    }

    public String getCERTF_T() {
        return CERTF_T;
    }

    public void setCERTF_T(String CERTF_T) {
        this.CERTF_T = CERTF_T;
    }

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

    public String getCNAME_AR() {
        return CNAME_AR;
    }

    public void setCNAME_AR(String CNAME_AR) {
        this.CNAME_AR = CNAME_AR;
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

    public String getBKEY() {
        return BKEY;
    }

    public void setBKEY(String BKEY) {
        this.BKEY = BKEY;
    }

    public String getBACNO() {
        return BACNO;
    }

    public void setBACNO(String BACNO) {
        this.BACNO = BACNO;
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

    public String getPSLEVEL() {
        return PSLEVEL;
    }

    public void setPSLEVEL(String PSLEVEL) {
        this.PSLEVEL = PSLEVEL;
    }

    public Date getRUN_DATE() {
        return RUN_DATE;
    }

    public void setRUN_DATE(Date RUN_DATE) {
        this.RUN_DATE = RUN_DATE;
    }

    public String getCNAME_EN() {
        return CNAME_EN;
    }

    public void setCNAME_EN(String CNAME_EN) {
        this.CNAME_EN = CNAME_EN;
    }
}
