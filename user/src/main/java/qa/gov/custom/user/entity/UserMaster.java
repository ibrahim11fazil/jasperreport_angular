package qa.gov.custom.user.entity;

import com.sun.istack.NotNull;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.*;

@Entity
@Table(name = "USER_MASTER")
public class UserMaster  {
    static final long serialVersionUID = 1L;

    @NotNull
    @Id
    @Column(name = "ID")
    private BigInteger id;

    @Column(name = "USERNAME")
    private String username;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "ENABLED")
    private BigInteger enabled;
    @Column(name = "ACCOUNT_EXPIRED")
    private BigInteger accountExpired;
    @Column(name = "CREDENTIALS_EXPIRED")
    private BigInteger credentialsExpired;
    @Column(name = "ACCOUNT_LOCKED")
    private BigInteger accountLocked;

//    @ManyToMany(fetch = FetchType.EAGER)
//    @JoinTable(name = "ROLE_USER",joinColumns = {@JoinColumn(name = "USER_ID",referencedColumnName = "ID")},
//            inverseJoinColumns = {@JoinColumn(name = "ROLE_ID",referencedColumnName = "ID" )})
//    private List<Role> roles;

    @Transient
    private BigInteger roleId;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }


    public String getUsername() {
        return username;
    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return !(this.accountExpired.intValue()!=0?true:false);
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return !(this.accountLocked.intValue()!=0?true:false);
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return !(this.credentialsExpired.intValue()!=0?true:false);
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return this.enabled.intValue()!=0?true:false;
//    }

    public void setUsername(String username) {
        this.username = username;
    }


//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        Set<GrantedAuthority> authorities = new HashSet<>();
//        roles.forEach(r->{
//            authorities.add(new SimpleGrantedAuthority(r.getName()));
//             r.getPermissions().forEach(p -> {
//                 authorities.add(new SimpleGrantedAuthority(p.getName()));
//             });
//        });
//
//        return authorities;
//
//        //return null;
//    }

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return null;
//    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public BigInteger getEnabled() {
        return enabled;
    }

    public void setEnabled(BigInteger enabled) {
        this.enabled = enabled;
    }


    public BigInteger getAccountExpired() {
        return accountExpired;
    }

    public void setAccountExpired(BigInteger accountExpired) {
        this.accountExpired = accountExpired;
    }


    public BigInteger getCredentialsExpired() {
        return credentialsExpired;
    }

    public void setCredentialsExpired(BigInteger credentialsExpired) {
        this.credentialsExpired = credentialsExpired;
    }


    public BigInteger getAccountLocked() {
        return accountLocked;
    }

    public void setAccountLocked(BigInteger accountLocked) {
        this.accountLocked = accountLocked;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserMaster that = (UserMaster) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(username, that.username) &&
                Objects.equals(password, that.password) &&
                Objects.equals(email, that.email) &&
                Objects.equals(enabled, that.enabled) &&
                Objects.equals(accountExpired, that.accountExpired) &&
                Objects.equals(credentialsExpired, that.credentialsExpired) &&
                Objects.equals(accountLocked, that.accountLocked);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, email, enabled, accountExpired, credentialsExpired, accountLocked);
    }

//    public List<Role> getRoles() {
//        return roles;
//    }
//
//    public void setRoles(List<Role> roles) {
//        this.roles = roles;
//    }


    public BigInteger getRoleId() {
        return roleId;
    }

    public void setRoleId(BigInteger roleId) {
        this.roleId = roleId;
    }
}
