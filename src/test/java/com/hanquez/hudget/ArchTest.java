package com.hanquez.hudget;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.hanquez.hudget");

        noClasses()
            .that()
                .resideInAnyPackage("com.hanquez.hudget.service..")
            .or()
                .resideInAnyPackage("com.hanquez.hudget.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..com.hanquez.hudget.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
