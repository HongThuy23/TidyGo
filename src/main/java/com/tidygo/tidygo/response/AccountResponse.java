package com.tidygo.tidygo.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountResponse {

    Long id;
    String avatar;
    String fullName;
    String username;
    String email;
    String phoneNumber;
    LocalDate dob;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;
    String gender;
    String roleName;
    String status;
}
