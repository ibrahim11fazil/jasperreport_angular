package qa.gov.customs.authentication.entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "PERMISSION_ROLE")
public class PermissionRole {
    static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ID")
    private BigInteger id;
    @Basic
    @Column(name = "REMAKR")
    private String remakr;
    @ManyToOne
    @JoinColumn(name = "PERMISSION_ID", referencedColumnName = "ID")
    private Permission permissionByPermissionId;
    @ManyToOne
    @JoinColumn(name = "ROLE_ID", referencedColumnName = "ID")
    private Role roleByRoleId;


    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }


    public String getRemakr() {
        return remakr;
    }

    public void setRemakr(String remakr) {
        this.remakr = remakr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PermissionRole that = (PermissionRole) o;
//        return Objects.equals(permissionId, that.permissionId) &&
//                Objects.equals(roleId, that.roleId) &&
        return Objects.equals(id, that.id) &&
                Objects.equals(remakr, that.remakr);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, remakr);
    }


    public Permission getPermissionByPermissionId() {
        return permissionByPermissionId;
    }

    public void setPermissionByPermissionId(Permission permissionByPermissionId) {
        this.permissionByPermissionId = permissionByPermissionId;
    }


    public Role getRoleByRoleId() {
        return roleByRoleId;
    }

    public void setRoleByRoleId(Role roleByRoleId) {
        this.roleByRoleId = roleByRoleId;
    }
}
