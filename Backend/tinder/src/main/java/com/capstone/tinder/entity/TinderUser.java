package com.capstone.tinder.entity;
import java.sql.Blob;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

enum gen{
	Male,
	Female,
	Others
}

@Entity
@Table(name="user_details")
public class TinderUser {
	@Id
	private String emailid;
	@Column(name="name")
	private String name;
	@Column(name="password")
	private String password;
	@Column(name="gender")
	private gen gender;
	@Column (name="pref_gender")
	private gen pref_gender;
	@Column (name="age")
	private int age;
//	@Lob
//	private String photo;
//	public String getPhoto() {
//		return photo;
//	}
//	public void setPhoto(String photo) {
//		this.photo = photo;
//	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}

	@Column(name="occupation")
	private String occupation;
	@Column(name="interests")
	private String interests;
	@Value("${premium:0}")
	@Column(name="premium")
	private int premium;
 
	public Integer getPremium() {
		return premium;
	}
	public void setPremium(Integer premium) {
		this.premium = premium;
	}

	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public gen getGender() {
		return gender;
	}
	public void setGender(gen gender) {
		this.gender = gender;
	}
	public gen getPref_gender() {
		return pref_gender;
	}
	public void setPref_gender(gen pref_gender) {
		this.pref_gender = pref_gender;
	}

	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getInterests() {
		return interests;
	}
	public void setInterests(String interests) {
		this.interests = interests;
	}
	
	
	@Override
	public String toString() {
		return "TinderUser [emailid=" + emailid + ", name=" + name + ", password=" + password + ", gender=" + gender
				+ ", pref_gender=" + pref_gender + ", age=" + age +  ", occupation=" + occupation
				+ ", interests=" + interests + ", premium=" + premium  + "]";
	}
	
}