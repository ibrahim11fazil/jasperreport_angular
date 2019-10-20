package qa.gov.custom.user.entity;//package qa.gov.customs.authentication.entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "ROLE_USER", schema = "RAJ", catalog = "")
public class RoleUser {
    static final long serialVersionUID = 1L;
    @Id
    @Column(name = "ID")
    private BigInteger id;
    @Column(name = "REMARK")
    private String remark;
    @ManyToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "ID")
    private UserMaster userMasterByUserId;
    @ManyToOne
    @JoinColumn(name = "ROLE_ID", referencedColumnName = "ID")
    private Role roleByRoleId;


    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoleUser roleUser = (RoleUser) o;
        return Objects.equals(id, roleUser.id) &&
//                Objects.equals(userId, roleUser.userId) &&
//                Objects.equals(roleId, roleUser.roleId) &&
                Objects.equals(remark, roleUser.remark);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, remark);
    }


    public UserMaster getUserMasterByUserId() {
        return userMasterByUserId;
    }

    public void setUserMasterByUserId(UserMaster userMasterByUserId) {
        this.userMasterByUserId = userMasterByUserId;
    }


    public Role getRoleByRoleId() {
        return roleByRoleId;
    }

    public void setRoleByRoleId(Role roleByRoleId) {
        this.roleByRoleId = roleByRoleId;
    }
}
